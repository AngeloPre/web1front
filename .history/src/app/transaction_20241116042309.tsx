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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"

export function Transaction() {
  return (
    <Tabs defaultValue="out" className="flex-1">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="out">Saídas</TabsTrigger>
        <TabsTrigger value="in">Entradas</TabsTrigger>
      </TabsList>
      <TabsContent value="out">
        <Card>
          <CardHeader>
            <CardTitle>Saídas</CardTitle>
            <CardDescription>
              Gastou dinheiro? Registre aqui.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Dogão do Paulão" />
            </div>
            <div className="space-y-1">
                <Label htmlFor="value">Valor</Label>
                <Input id="value" placeholder="25,90" />
            </div>
            <div className="space-y-1">
                <Label htmlFor="category">Categoria</Label>
                <Select>
                    <SelectTrigger className="flex-1">
                        <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="roupa">Roupas</SelectItem>
                        <SelectItem value="viagem">Viagens</SelectItem>
                        <SelectItem value="transporte">Transporte</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-1">
                <Label htmlFor="description">Descrição</Label>
                <Input id="description" placeholder="Detalhes sobre esta saída" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="flex-1">Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="in">
        <Card>
          <CardHeader>
            <CardTitle>Entradas</CardTitle>
            <CardDescription>
              Ganhou dinheiro? Registre aqui.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <div className="space-y-1">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Pagamento " />
            </div>
            <div className="space-y-1">
                <Label htmlFor="value">Valor</Label>
                <Input id="value" placeholder="25,90" />
            </div>
            <div className="space-y-1">
                <Label htmlFor="category">Categoria</Label>
                <Select>
                    <SelectTrigger className="flex-1">
                        <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="roupa">Salário</SelectItem>
                        <SelectItem value="viagem">Freelance</SelectItem>
                        <SelectItem value="transporte">OLX</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-1">
                <Label htmlFor="description">Descrição</Label>
                <Input id="description" placeholder="Detalhes sobre esta saída" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="flex-1">Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
