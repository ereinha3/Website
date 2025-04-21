export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface ChatResponse {
  query: string;
  response: string;
  context: string;
  relevant_docs: string[];
} 