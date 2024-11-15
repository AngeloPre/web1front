import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function Transaction() {
  return (
    <Tabs defaultValue="out" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="out">Saídas</TabsTrigger>
        <TabsTrigger value="in">Entradas</TabsTrigger>
      </TabsList>
      <TabsContent value="out">
        <Card>
          <CardHeader>
            <CardTitle>Gastos/Custos</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Pedro Duarte" />
            </div>
            <div className="space-y-1">
                <Label htmlFor="value">Valor</Label>
                <Input id="value" placeholder="1000,00" />
            </div>
            <div className="space-y-1">
                <Label htmlFor="description">Descrição</Label>
                <Input id="description" placeholder="Detalhes sobre esta saída" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="in">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
