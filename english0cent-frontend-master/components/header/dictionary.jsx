"use client";

import { useState } from "react";

import Image from "next/image";
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import axios from 'axios';

const dictionary = () => {
  const [word, setWord] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      setResult(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <div className="flex-center cursor-pointer">
            <Image
              src={"/assets/icons/Dictionary.png"}
              width={30}
              height={30}
              alt={"Icon of Dictionary"}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] h-auto flex mt-4 mr-4">
          <Card className="w-full">
            <CardHeader className="flex-center">
              <CardTitle>Dictionary</CardTitle>
            </CardHeader>
            <CardContent className="flex-center flex-col space-y-3">
              <form onSubmit={handleSubmit}>
                <div className="flex-col space-y-4">
                  <div className="flex-center space-x-4">
                    <Input
                      value={word}
                      onChange={(e) => setWord(e.target.value)}
                      placeholder="Type a word"
                    />
                    <Button type="submit">Search</Button>
                  </div>
                  {result ? (
                    <div className="flex-col space-y-4 overflow-y-auto hide-scrollbar" style={{ maxHeight: '400px' }}>
                      <div className="font-bold">Phonetic: {result.phonetics[0].text}</div>
                      {result.phonetics[0].audio && (
                        <audio src={result.phonetics[0].audio} controls />
                      )}
                      <ul>
                        {result.meanings.map((meaning) => (
                          <li key={meaning.partOfSpeech}>
                            <div className="font-bold">{meaning.partOfSpeech.charAt(0).toUpperCase() + meaning.partOfSpeech.slice(1)}</div>
                            {meaning.definitions.slice(0, 3).map((definition, index) => (
                              <div key={definition.definition}>
                                {index + 1}. {definition.definition}
                              </div>
                            ))}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </form>
            </CardContent>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default dictionary;

