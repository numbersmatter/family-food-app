import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { ApplyDialogForm } from "./apply-dialog-form";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import grocery from "~/images/groceries.gif"


interface Opportunity {
  id: string;
  name: string;
  date: string;
  description: string;
}

export default function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <Card className="flex flex-col max-w-lg h-full justify-between  overflow-hidden py-0">
      <CardHeader>
        <CardTitle>
          {opportunity.name}
        </CardTitle>
        <CardDescription>
          {opportunity.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex justify-center">
        <img alt="groceries" src={grocery} className="h-36 w-36  shrink-0'" />
      </CardContent>
      <CardFooter className="">
        <ApplyDialogForm />
      </CardFooter>
    </Card>
  );
}
