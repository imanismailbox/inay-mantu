import React, { useState, useEffect } from 'react'

import ReactTimeAgo from 'react-time-ago'

import { createClient } from '@supabase/supabase-js'
const supabase = createClient("https://akvlznzubtoxzjdqhlig.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrdmx6bnp1YnRveHpqZHFobGlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2MTUxOTgsImV4cCI6MjAxMTE5MTE5OH0.heCj3HDDYVUK386lXUp8sIFnAfncV7MreuAKEiOOrS4");

export default function Messages() {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    getMessages();
  }, []);

  async function getMessages() {
    const { data, error } = await supabase
      .from('messages')
      .select()
      .order('created_at', { ascending: true })

    setMessages(data);
  }

  async function sendMessage() {
    const { error } = await supabase
      .from('messages')
      .insert({  name: 'Denmark' })

    setMessages(data);
  }
	return(
		<>
      <div className="card w-96 h-4/5 overflow-y-auto shadow-xl text-left">
        <div className="card-body">
          {messages.map((message) => (
            <div className="chat chat-start" key={messages.id}>
              <div className="chat-header">
                {message.name} 
                <time className="text-xs opacity-50 pl-1">
                  <ReactTimeAgo date={message.created_at} />
                    {/* <ReactTimeAgo date={message.created_at} locale="id-ID" timeStyle="twitter"/> */}
                </time>
              </div>
              <div className="chat-bubble">{message.body}</div>
              {/* <div className="chat-footer opacity-50">
                Seen
              </div> */}
            </div>
          ))}
        </div>
      </div>
      {/* <div className="grid min-h-screen overflow-y-auto">
        <div className="flex">
          <div className="flex flex-col">
            <div className="chat chat-start">
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">2 hours ago</time>
              </div>
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">
                Seen
              </div>
            </div>
            
            <div className="chat chat-start">
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">2 hour ago</time>
              </div>
              <div className="chat-bubble">I loved you.</div>
              <div className="chat-footer opacity-50">
                Delivered
              </div>
            </div>
          </div>
        </div>
      </div> */}
		</>
	)
}