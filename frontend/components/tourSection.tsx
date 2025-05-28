"use client"

import { Button } from "@/components/ui/button"
import { TourCard } from "./tourCard"
import {useEffect, useState} from "react";
import {getExperiences} from "@/lib/api";

type Experience = {
    id: string;
    title: string;
    description: string;
    price: number;
    images: string[];
    tags: string[];
    duration?: string;
    review?: number;
    targetedGroups?: string[];
    location : string;
};

export function ToursSection() {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        getExperiences().then(setExperiences).catch((err) => {setError(err.message) ;
            console.error("API Error", err)}
    );
    }, []);
    if (error) return <p>Error : {error}</p>;
    if (experiences.length === 0) return <p>No experiences found.</p>;
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Tours & Experiences</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose from our handpicked selection of the world's best tours and activities
                    </p>
                </div>

                {/* Tours Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {experiences.map((exp) => (
                        <TourCard key={exp.id} exp={exp} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Button variant="outline" size="lg" className="px-8">
                        View All Tours
                    </Button>
                </div>
            </div>
        </section>
    )
}
