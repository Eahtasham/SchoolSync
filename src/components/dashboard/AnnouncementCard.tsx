interface AnnouncementCardProps {
  title: string;
  date: string;
  description: string;
}

const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
    title,
    date,
    description,
  }) => {
  
    return (
      <div className={`dark:bg-smoke-800 border-2 border-gray-100 border-t-4 odd:border-t-lamaGreenLight even:border-t-purple-400 rounded-md p-4`}>
        <div className="flex items-center justify-between">
          <h2 className="font-medium">{title}</h2>
          <span className="text-xs text-gray-400 dark:text-lamaYellow bg-white dark:bg-slate-800 rounded-md px-1 py-1">
            {date}
          </span>
        </div>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
      </div>
    );
  };

export default AnnouncementCard;