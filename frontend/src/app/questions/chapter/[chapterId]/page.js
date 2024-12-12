"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { questions } from "../../data";

const ChapterPage = () => {
  const { chapterId } = useParams(); // Use useParams to get the dynamic parameter

  const filteredQuestions = questions.filter(
    (question) => question.chapterId === chapterId
  );

  if (!filteredQuestions.length) {
    return <div>No questions found for this chapter.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Questions</h1>
      <ul className="mt-4 space-y-2">
        {filteredQuestions.map((question) => (
          <Link href={`/questions/question/${question.id}`} key={question.id}>
            <li className="p-4 bg-gray-100 rounded-lg shadow hover:bg-teal-200 cursor-pointer">
              {question.text}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ChapterPage;
