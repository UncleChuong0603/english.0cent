import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import React, { useState } from 'react';
import axios from 'axios';

const newsletter = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await axios.post(`${config.server}/api/emailsubscription`, { email });
        alert('Successfully subscribed!');
        } catch (error) {
        alert('Subscription failed. Please try again.');
        }
    };
    
    return (
    <div className="w-full py-12 bg-gray-950 text-white rounded-3xl">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              If something is coming
            </h2>
            <p className="text-gray-400">
              Subscribe to our newsletter to receive the latest updates, tips, and resources straight to your inbox.
            </p>
            <div className="flex-center space-x-4">
              <Input
                aria-label="Enter your email"
                className="h-11 w-full rounded-md border-none bg-gray-800 placeholder:text-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-500 md:w-3/5"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
              <Button className="w-full md:w-auto" variant="outline" onClick={handleSubmit}>
                Join now
              </Button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default newsletter