interface Project {
	default: {
        title: string;
        tags: string[];
        url: string;
        authors: string;
        description: string;
        img: string;
    }[];
};

export default Project;