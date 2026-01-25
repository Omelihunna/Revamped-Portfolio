interface TechnologyProps {
    name: string;
}

const Technology = ({ name }: TechnologyProps) => {
    return (
        <li className="mr-1.5 mt-2">
            <div className="tech-tag inline-flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 transition-all duration-300 hover:scale-105">
                {name}
            </div>
        </li>
    );
};

export default Technology;