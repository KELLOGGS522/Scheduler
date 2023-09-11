import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export interface CourseComponentProps {
    title: string;
    index: number;
    parent: string;
    parentId: number;
  }

export const CourseComponent = ({
    title,
    index,
    parent,
    parentId,
}: CourseComponentProps) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: title,
        data: {
            title,
            index,
            parent,
            parentId,
        },
    });
    const style = {
        transform: CSS.Translate.toString(transform),
      };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
        >
            {title}
        </div>
    )
}