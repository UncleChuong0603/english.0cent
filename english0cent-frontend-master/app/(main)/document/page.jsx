"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import fetchDocuments from '@/helpers/fetchDocuments';

const DocumentCategory = ({ category, count, handleClick, isSelected }) => (
  <li>
    <div
      className={`cursor-pointer flex items-center justify-between gap-2 rounded-lg px-4 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50 ${isSelected ? 'font-bold' : ''}`}
      onClick={() => handleClick(category)}
    >
      <span>{category}</span>
      <Badge>{count}</Badge>
    </div>
  </li>
);

export default function Component() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchDocumentData = async () => {
      try {
        const docs = await fetchDocuments('');
        if (docs.data.length === 0) {
          setError('No documents found');
        } else {
          setDocuments(docs.data);
          const categoryCount = docs.data.reduce((acc, doc) => {
            const category = doc.attributes.Category;
            acc[category] = acc[category] ? acc[category] + 1 : 1;
            return acc;
          }, {});
          categoryCount["All Documents"] = docs.data.length;
          setCategories(categoryCount);
        }
      } catch (err) {
        setError('Error fetching document data');
      } finally {
        setLoading(false);
      }
    };

    fetchDocumentData();
  }, []);

  useEffect(() => {
    const category = searchParams.get('category');
    setSelectedCategory(category);
    if (category) {
      localStorage.setItem('selectedCategory', category);
    } else {
      localStorage.removeItem('selectedCategory');
    }
  }, [searchParams]);

  useEffect(() => {
    const storedCategory = localStorage.getItem('selectedCategory');
    if (storedCategory) {
      setSelectedCategory(storedCategory);
    }
  }, []);

  const handleCategoryClick = (category) => {
    const newCategory = category === "All Documents" ? null : category;
    setSelectedCategory(newCategory);
    router.push(`/document${newCategory ? `?category=${newCategory}` : ''}`);
  };

  const filteredDocuments = selectedCategory
    ? documents.filter(doc => doc.attributes.Category === selectedCategory)
    : documents;

  if (loading) return <div className='w-full h-[608px] bg-white rounded-3xl flex-center'>Loading...</div>;
  if (error) return <div className='w-full h-[608px] bg-white rounded-3xl flex-center'>{error}</div>;

  return (
    <div className={`w-full p-8 flex bg-white rounded-3xl ${filteredDocuments.length < 3 ? 'h-[608px]' : 'h-auto'}`}>
      <div className="hidden w-80  flex-col gap-4 md:flex">
        <div className="sticky top-8 space-y-4">
          <h3 className="text-lg font-semibold">Categories</h3>
          <nav>
            <ul className="space-y-2">
              {Object.keys(categories).map((category, index) => (
                <DocumentCategory
                  key={index}
                  category={category}
                  count={categories[category]}
                  handleClick={handleCategoryClick}
                  isSelected={selectedCategory === category || (!selectedCategory && category === "All Documents")}
                />
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredDocuments.map((document, index) => (
            <Card key={index}>
              <CardContent>
                <h3 className="text-xl font-bold py-5">{document.attributes.Title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {document.attributes.Summary}
                </p>
                <div className="flex justify-end space-x-4">
                  <Button variant="outline">{document.attributes.Category}</Button>
                  <Button>
                    <Link href={document.attributes.Link} target="_blank">Download</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
