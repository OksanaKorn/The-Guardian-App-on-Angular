interface News {
    id: number; label: string; key: any
}

interface News extends Array<News>{}