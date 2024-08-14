export async function getReviews({order = 'createdAt', offset = 0, limit = 6}) {
    const query = `order=${order}&offset=${offset}&limit=${limit}`;
    const response = await fetch(`https://learn.codeit.kr/8211/film-reviews?${query}`);
    const body = await response.json();
    return body;
}