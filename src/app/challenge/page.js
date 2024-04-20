import Image from 'next/image';
// shows image in a box taking up most of the screen and a little section for metadata below
async function getChallenge() {
        const response = await fetch('https://api.github.com/repos/vercel/next.js');
        return response.json();
    }
export default async function Challenge() {
    const data = await getChallenge();
    return (<div className="container flex flex-col items-center justify-center mx-auto h-screen">
            <h1 className="text-4xl pb-5">Challenge: </h1> 
        <div className="image-container h-3/4">
        <Image src="https://cdn.discordapp.com/attachments/1225620233583071243/1231119177713061928/1.png?ex=6635cc15&is=66235715&hm=f56c70855813af103e077b0b4287f26c9ea49365b241f2765397c473334998c6&" alt="Slider" width={3024} height={4032} className="object-scale-down max-h-full" /> </div>
<form action="http://localhost:3000/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="photo" id="photo" />
  <input type="submit" value="Upload Image" name="submit" />
</form>
    </div>
    );
 
}
