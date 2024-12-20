"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { chapters,subjects } from "../../../student-portal/data";

const SubjectPage = () => {

  const { subjectId } = useParams(); // Use useParams to get the dynamic parameter
  console.log(subjectId); // Log the dynamic parameter to the console

  const subject = subjects.find((subject) => subject.id === subjectId);
  console.log(subject); // Log the subject object to the conso
  const filteredChapters = chapters.filter(
    (chapter) => chapter.subjectId === subjectId
  );
  console.log(filteredChapters); // Log the filtered chapters to the console

  if (!filteredChapters.length) {
    return <div>No chapters found for this subject.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 font-jakarta">


      <h2 className="text-2xl font-bold text-gray-700 font-instSansB mb-6 text-center">
        {subject?.name}
          </h2>
        {/* Header: Course Title and Navbar */}
        <div className="flex justify-center gap-4  mb-6">
          <div>
            <div className="grid grid-cols-3 gap-6 ">
              {filteredChapters.map((chapter, index) => (
                <div
                  key={index}
                  className="flex  hover:border-gray-400 items-center justify-between pl-2 pr-4 py-3 border rounded-xl"
                >
                  {/* Course Details */}
                  <div className="flex items-center space-x-4">
                    {/* Icon */}
                    <div className="h-10 w-10  flex items-center  justify-center rounded-full">
                      <span
                        role="img"
                        aria-label="course-icon"
                        className="text-2xl"
                      >
                        {chapter.icon}
                      </span>
                    </div>
                    {/* Details */}
                    <div>
                      <h3 className="text-md font-instSansB text-gray-800 ">
                        {chapter.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {chapter.videos} videos
                      </p>
                    </div>
                  </div>

                  {/* Progress and Button */}
                  <div className="flex items-center space-x-4">
                    <Link key={index} href={`/videos/subject/${chapter.id}`}>
                     
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default SubjectPage;
