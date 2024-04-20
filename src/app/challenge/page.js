// shows image in a box taking up most of the screen and a little section for metadata below
async function getChallenge() {
        const response = await fetch('https://api.github.com/repos/vercel/next.js');
        return response.json();
    }
export default async function Challenge() {
    const data = await getChallenge();
    return <p>{data.url}</p>;


}
