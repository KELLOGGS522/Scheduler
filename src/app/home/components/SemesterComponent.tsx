import { useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";

export interface SemesterComponentProps {
    season: string;
    year: string;
    courses?: any;
}

export const SemesterComponent = ({
    season,
    year,
    courses
}: SemesterComponentProps) => {
    const { setNodeRef } = useDroppable({
        id: season+" "+year,
    });

    return (
        <div
            key={season+year}
            ref={setNodeRef}
            className="bg-primary"
        >
            {season+" "+year}
            {courses}
        </div>
    )
}