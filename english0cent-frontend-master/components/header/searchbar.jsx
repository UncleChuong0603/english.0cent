"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import fetchBlogs from '@/helpers/fetchBlogs';
import fetchCourses from '@/helpers/fetchCourses';
import fetchDocuments from '@/helpers/fetchDocuments';

const fetchResults = async (query) => {
    const [blogs, courses, documents] = await Promise.all([
        fetchBlogs(`filters[Title][$contains]=${query}`),
        fetchCourses(`filters[Title][$contains]=${query}`),
        fetchDocuments(`filters[Title][$contains]=${query}`)
    ]);

    return {
        blogs: blogs.data.slice(0, 3),
        courses: courses.data.slice(0, 3),
        documents: documents.data.slice(0, 3),
    };
};

const Searchbar = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState({ courses: [], documents: [], blogs: [] });
    const [typingTimeout, setTypingTimeout] = useState(null);
    const [isTyping, setIsTyping] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        if (query) {
            setIsTyping(true);
            setShowResults(true);
            if (typingTimeout) {
                clearTimeout(typingTimeout);
            }
            setTypingTimeout(setTimeout(async () => {
                const data = await fetchResults(query);
                setResults(data);
                setIsTyping(false);
            }, 1000));
        } else {
            setResults({ courses: [], documents: [], blogs: [] });
            setIsTyping(false);
            setShowResults(false);
        }
    }, [query]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowResults(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const handleResultClick = () => {
        setQuery("");
        setShowResults(false);
    };

    return (
        <div className="relative flex items-center gap-4 w-full" ref={wrapperRef}>
            <Input
                className="flex-1"
                placeholder="Search for Course, Blog, Document,..."
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setShowResults(true)}
            />
            {showResults && query && (
                <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-2 z-10 p-4">
                    <div className="text-lg font-semibold">
                        Search Results for "{query}"
                    </div>
                    <hr className="my-2" />
                    {isTyping ? (
                        <div className="text-gray-500">Waiting for your request...</div>
                    ) : (
                        <>
                            <div className="text-lg font-semibold">Courses</div>
                            {results.courses.length > 0 ? (
                                results.courses.map((course, index) => (
                                    <div key={index} className="p-2 hover:bg-gray-100 rounded-md cursor-pointer" onClick={handleResultClick}>
                                        {course.attributes.Title}
                                    </div>
                                ))
                            ) : (
                                <div className="p-2 text-gray-500">No Courses Found</div>
                            )}
                            <hr className="my-2" />
                            <div className="text-lg font-semibold">Documents</div>
                            {results.documents.length > 0 ? (
                                results.documents.map((document, index) => (
                                    <div key={index} className="p-2 hover:bg-gray-100 rounded-md cursor-pointer" onClick={handleResultClick}>
                                        {document.attributes.Title}
                                    </div>
                                ))
                            ) : (
                                <div className="p-2 text-gray-500">No Documents Found</div>
                            )}
                            <hr className="my-2" />
                            <div className="text-lg font-semibold">Blogs</div>
                            {results.blogs.length > 0 ? (
                                results.blogs.map((blog, index) => (
                                    <div key={index} className="p-2 hover:bg-gray-100 mt-2 rounded-md cursor-pointer" onClick={handleResultClick}>
                                        <Link href={`/blog/${blog.attributes.slug}`}>
                                            {blog.attributes.Title}
                                        </Link>
                                    </div>
                                ))
                            ) : (
                                <div className="p-2 text-gray-500">No Blogs Found</div>
                            )}
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Searchbar;
