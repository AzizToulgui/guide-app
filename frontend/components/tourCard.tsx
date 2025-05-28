import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock, Users } from "lucide-react";
import Image from "next/image";

interface ExperienceCardProps {
    exp: {
        id: string;
        title: string;
        description: string;
        price: number;
        duration?: string;
        review?: number;
        targetedGroups?: string[];
        tags: string[];
        images: string[];
        location: string;
    };
}

export function TourCard({ exp }: ExperienceCardProps) {
    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
            <div className="relative">
                <Image
                    src={`http://localhost:3000${exp.images}`|| "/placeholder.svg"}
                    alt={exp.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-blue-600 text-white">
                    Best Seller
                </Badge>
            </div>

            <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                    </div>
                    <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">
              {exp.review ?? 0}
            </span>
                    </div>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {exp.title}
                </CardTitle>
            </CardHeader>

            <CardContent className="pt-0">
                <CardDescription className="text-gray-600 mb-4 line-clamp-2">
                    {exp.description}
                </CardDescription>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {exp.duration ?? "N/A"}
                    </div>
                    <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {exp.targetedGroups?.[0] || "Any group"}
                    </div>
                </div>
            </CardContent>

            <CardFooter className="pt-0">
                <div className="flex items-center justify-between w-full">
                    <div>
            <span className="text-2xl font-bold text-gray-900">
              ${exp.price}
            </span>
                        <span className="text-sm text-gray-500 ml-1">per person</span>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Learn More
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
