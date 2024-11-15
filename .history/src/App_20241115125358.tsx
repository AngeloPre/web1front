import React from 'react';
import { Layout } from "./app/layout";  // Import the layout you created
import { Button } from "./components/ui/button";

export function App() {
  return (
    <Layout className="text-4xl">
      <div style={{ padding: '20px' }}>
        <h1>Hello from the Main Content!</h1>
        <Button>Hello World</Button>
      </div>
    </Layout>
  )
}