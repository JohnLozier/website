interface Project {
	default: {
        title: string;
        tags: string[];
        url?: string;
        description: string;
        img: string;
        alt: string;
    }[];
};

export default Project;