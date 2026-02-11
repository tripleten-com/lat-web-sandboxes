const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];

const documents = [
    {
        _id: "507f1f77bcf86cd799439011",
        name: "Graph.png",
        size: 1100,
        type: "image/png",
        dateModified: "2024-10-03",
    },
    {
        _id: "507f1f77bcf86cd799439012",
        name: "audio.mp3",
        size: 3000,
        type: "audio/mpeg",
        dateModified: "2024-09-25",
    },
    {
        _id: "507f1f77bcf86cd799439010",
        name: "big_movie.mp4",
        size: 50000000,
        type: "video/mp4",
        dateModified: "2024-10-04",
    },
    {
        _id: "507f1f77bcf86cd799439013",
        name: "spreadsheet.xlsx",
        size: 2048,
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        dateModified: "2024-09-30",
    },
    {
        _id: "507f1f77bcf86cd799439014",
        name: "icon.gif",
        size: 700,
        type: "image/gif",
        dateModified: "2024-09-22",
    },
    {
        _id: "507f1f77bcf86cd799439015",
        name: "music.flac",
        size: 3200,
        type: "audio/flac",
        dateModified: "2024-09-18",
    },
    {
        _id: "507f1f77bcf86cd799439016",
        name: "document.pdf",
        size: 1024,
        type: "application/pdf",
        dateModified: "2024-09-17",
    },
    {
        _id: "507f1f77bcf86cd799439017",
        name: "Archive.zip",
        size: 4096,
        type: "application/zip",
        dateModified: "2024-09-15",
    },
    {
        _id: "507f1f77bcf86cd799439018",
        name: "vector.svg",
        size: 850,
        type: "image/svg+xml",
        dateModified: "2024-09-10",
    },
    {
        _id: "507f1f77bcf86cd799439019",
        name: "profile.bmp",
        size: 1600,
        type: "image/bmp",
        dateModified: "2024-09-05",
    },
    {
        _id: "507f1f77bcf86cd799439020",
        name: "more puppies.jpeg",
        size: 3072,
        type: "image/jpeg",
        dateModified: "2024-09-01",
    },
    {
        _id: "507f1f77bcf86cd799439021",
        name: "manual.doc",
        size: 1408,
        type: "application/msword",
        dateModified: "2024-08-22",
    },
    {
        _id: "507f1f77bcf86cd799439022",
        name: "document.txt",
        size: 1024,
        type: "text/plain",
        dateModified: "2024-10-01",
    },
    {
        _id: "507f1f77bcf86cd799439023",
        name: "document (1).txt",
        size: 1024,
        type: "text/plain",
        dateModified: "2024-10-01",
    },
    {
        _id: "507f1f77bcf86cd799439024",
        name: "document (2).txt",
        size: 1024,
        type: "text/plain",
        dateModified: "2024-10-01",
    },
    {
        _id: "507f1f77bcf86cd799439025",
        name: "document (3).txt",
        size: 1024,
        type: "text/plain",
        dateModified: "2024-10-01",
    },
    {
        _id: "507f1f77bcf86cd799439026",
        name: "Presentation.pptx",
        size: 2048,
        type: "application/vnd.ms-powerpoint",
        dateModified: "2024-09-20",
    },
    {
        _id: "507f1f77bcf86cd799439027",
        name: "puppies.jpeg",
        size: 512,
        type: "image/jpeg",
        dateModified: "2024-08-15",
    },
];

// validedDocuments solo tiene archivos que pasan la validación.
const validatedDocuments = [
    {
        _id: "507f1f77bcf86cd799439028",
        name: "photo.png",
        size: 1024,
        type: "image/png",
        dateModified: "2024-08-01",
    },
    {
        _id: "507f1f77bcf86cd799439029",
        name: "video.mp4",
        size: 20480,
        type: "video/mp4",
        dateModified: "2024-07-15",
    },
    {
        _id: "507f1f77bcf86cd799439030",
        name: "notes.txt",
        size: 512,
        type: "text/plain",
        dateModified: "2024-07-10",
    },
    {
        _id: "507f1f77bcf86cd799439031",
        name: "report.pdf",
        size: 2048,
        type: "application/pdf",
        dateModified: "2024-07-05",
    },
    {
        _id: "507f1f77bcf86cd799439032",
        name: "music.mp3",
        size: 15360,
        type: "audio/mpeg",
        dateModified: "2024-07-01",
    },
];

const uploadedDocuments = [
    {
        _id: "507f1f77bcf86cd799439033",
        name: "presentation.ppt",
        size: 10240,
        type: "application/vnd.ms-powerpoint",
        dateModified: "2024-07-20",
    },
    {
        _id: "507f1f77bcf86cd799439034",
        name: "ebook.epub",
        size: 3072,
        type: "application/epub+zip",
        dateModified: "2024-07-18",
    },
    {
        _id: "507f1f77bcf86cd799439035",
        name: "photo.jpeg",
        size: 5120,
        type: "image/jpeg",
        dateModified: "2024-07-17",
    },
];

export { people, documents, validatedDocuments };
