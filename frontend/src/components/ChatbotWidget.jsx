import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! 👋 I\'m your AI Timetable Assistant.\n\nI can help you with:\n• NEP 2020 information\n• How to use the system\n• Troubleshooting\n\nJust ask me anything!' }
  ]);
  const [input, setInput] = useState('');

  const getResponse = (msg) => {
    const m = msg.toLowerCase();
    
    if (m.includes('hello') || m.includes('hi')) 
      return 'Hello! 😊 How can I help you today?';
    
    if (m.includes('nep')) 
      return 'NEP 2020 supports 6 course types:\n\n1. **Major** - Core specialization\n2. **Minor** - Secondary field\n3. **Multidisciplinary** - Cross-disciplinary\n4. **Ability Enhancement** - Language skills\n5. **Skill Enhancement** - Practical skills\n6. **Value-added** - Ethics, environment';
    
    if (m.includes('generate') || m.includes('timetable')) 
      return 'To generate a timetable:\n\n1. Login to dashboard\n2. Add Faculty members\n3. Add Courses and assign faculty\n4. Add Rooms\n5. Click "Generate Timetable"\n\nThe AI creates a conflict-free schedule in seconds! 🚀';
    
    if (m.includes('login')) 
      return 'Default login credentials:\n\n**Username:** admin\n**Password:** admin123\n\nClick "Launch Dashboard" to login!';
    
    if (m.includes('export')) 
      return 'You can export your timetable as:\n\n📄 **PDF** - Professional printable format\n📊 **Excel** - Spreadsheet for editing\n\nFind export buttons on the Timetable page!';
    
    if (m.includes('error') || m.includes('not working')) 
      return 'Common solutions:\n\n✅ Check backend is running (localhost:5000)\n✅ Make sure you have added faculty, courses, and rooms\n✅ Clear browser cache\n✅ Check console (F12) for errors';
    
    if (m.includes('contact') || m.includes('help')) 
      return 'Need more help?\n\n📧 Email: contact@timetableai.com\n📱 Phone: +91 98765 43210\n🏫 Atria University, Bangalore\n\nOr try asking me specific questions!';
    
    return 'I can help you with:\n\n💡 NEP 2020 information\n🎯 How to generate timetables\n🔧 Troubleshooting issues\n📤 Export options\n\nWhat would you like to know?';
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { type: 'user', text: input }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: getResponse(input) }]);
    }, 500);
    
    setInput('');
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-accent-primary to-accent-cyan rounded-full shadow-2xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
          >
            <MessageCircle size={28} className="text-white" />
            <motion.div
              className="absolute inset-0 rounded-full bg-accent-cyan"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-dark-card rounded-2xl shadow-2xl border border-accent-cyan/30 flex flex-col"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-accent-primary to-accent-cyan p-4 flex justify-between items-center rounded-t-2xl">
              <div className="flex items-center gap-3">
                <Sparkles className="text-white w-6 h-6" />
                <div>
                  <h3 className="font-bold text-white">AI Assistant</h3>
                  <p className="text-xs text-white/80">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.type === 'user' 
                      ? 'bg-gradient-to-r from-accent-primary to-accent-cyan text-white' 
                      : 'bg-dark-bg text-gray-300'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 bg-dark-bg border border-gray-600 rounded-full text-white focus:border-accent-cyan outline-none"
                />
                <button onClick={handleSend} className="p-2 bg-gradient-to-r from-accent-primary to-accent-cyan rounded-full">
                  <Send size={20} className="text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatbotWidget;
