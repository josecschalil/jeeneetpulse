"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { chapters } from "../../data";

const SubjectPage = () => {
  const { subjectId } = useParams(); // Use useParams to get the dynamic parameter

  const filteredChapters = chapters.filter(
    (chapter) => chapter.subjectId === subjectId
  );

  if (!filteredChapters.length) {
    return <div>No chapters found for this subject.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Chapters</h1>
      <ul className="mt-4 space-y-2">
        {filteredChapters.map((chapter) => (
          <Link href={`/questions/chapter/${chapter.id}`} key={chapter.id}>
            <li className="p-4 bg-gray-100 rounded-lg shadow hover:bg-teal-200 cursor-pointer">
              {chapter.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SubjectPage;
