import React from 'react';
import { Layout } from "@/app/layout";  // Import the layout you created
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import { Separator } from '@radix-ui/react-separator';


const Dashboard = () => {
  return (
    <div className="flex ">
        
    <Layout children={undefined}/>
    

      <main className="flex-1 p-6 overflow-auto">
        <div className="flex justify-between">
          <h1 className="text-5xl">Dashboard</h1>
          <Dialog>
            <DialogTrigger>Nova Transação</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <Tabs defaultValue="account" className="flex flex-1 flex-col justify-center">
                  <TabsList className="bg-transparent py-7">
                    <TabsTrigger value="login">
                      
                    </TabsTrigger>
                    
                    <TabsTrigger value="register">
                      
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="login" className="flex flex-1 flex-col gap-8 justify-center items-center min-w-96">
                    <Separator/>
                    
                  </TabsContent>
                  <TabsContent value="register" className="flex flex-1 flex-col gap-8 justify-center items-center min-w-96">
                    <Separator/>
                    <h1>teste</h1>
                  </TabsContent>
                </Tabs>

                </DialogHeader>
            </DialogContent>
          </Dialog>

        </div>
        <div className="flex justify-between gap-x-32 mt-6">
          <Card className='bg-zinc-900 flex-1 shadow-lg p-2 text-center'>
            <CardHeader>
              <CardTitle className="text-2xl text-lime-500">Entradas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl"><span className="text-sm">R$</span>700,00</p>
            </CardContent>
          </Card>

          <Card className='bg-zinc-900  flex-1  shadow-lg p-2 text-center'>
            <CardHeader>
            <CardTitle className="text-2xl text-red-500">Saidas</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-4xl"><span className="text-sm">R$</span>700,00</p>
            </CardContent>

          </Card>

          <Card className='bg-zinc-900  flex-1  shadow-lg p-2 text-center'>
            <CardHeader>
            <CardTitle className="text-2xl text-blue-500">Balanço</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-4xl"><span className="text-sm">R$</span>700,00</p>
            </CardContent>

          </Card>
        </div>

      </main>
    </div>
  );
};

export default Dashboard;
