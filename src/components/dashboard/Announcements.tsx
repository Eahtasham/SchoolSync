import { Card, CardContent } from "@/components/ui/card";
import AnnouncementCard from "@/components/dashboard/AnnouncementCard";


const Announcements: React.FC = () => {
  const announcementData = [
    {
      title: "Lorem ipsum dolor sit",
      date: "2024-09-11",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, expedita. Rerum, quidem facilis?",
    },
    {
      title: "Lorem ipsum dolor sit",
      date: "2024-09-11",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, expedita. Rerum, quidem facilis?",
    },
    {
      title: "Lorem ipsum dolor sit",
      date: "2024-09-11",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, expedita. Rerum, quidem facilis?",
    },
    {
      title: "Lorem ipsum dolor sit",
      date: "2024-09-11",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, expedita. Rerum, quidem facilis?",
    },
  ];

  return (
    <Card className="w-full bg-white dark:bg-stone-800 pt-4 rounded-xl">
      <CardContent>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Announcements</h1>
          <span className="text-xs text-gray-400">View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {announcementData.map((announcement, index) => (
            <AnnouncementCard
              key={index}
              title={announcement.title}
              date={announcement.date}
              description={announcement.description}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Announcements;
