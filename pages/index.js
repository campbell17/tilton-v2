import Layout from '../components/layout'
import Gallery from '../components/gallery/gallery'
import DarkFeature from '../components/dark-feature'
import Album from '../components/album'
import LogoCloud from '../components/logo-cloud'
import sanity from '../sanity/lib/sanity'


const query = `*[_type == 'project']{
  _id,
  hero,
  company,
  type,
  year,
  songsdata[]->{title, url}
}
`;

export default function Home({projects}) {
  const customTracks = [
    {
      "title": "From Main Theme [Excerpt]",
      "project": "From (TV Series)",
      "url": "/music/christilton_from_01_from-main-theme.mp3",
      "image": "/images/cover-art/from.jpg", 
    },
    {
      "title": "Unity [Excerpt]",
      "url": "/music/christilton_acunity_01_unity_excerpt.mp3",
      "project": "Assassin's Creed Unity (Video Game)",
      "image": "/images/cover-art/assassins-creed-unity.jpg", 
    },
    {
      "title": "Sim City Theme [Excerpt]",
      "url": "/music/christilton_simcity_01_simcity-theme_excerpt.mp3",
      "project": "Sim City (Video Game)",
      "image": "/images/cover-art/sim-city.jpg", 
    },
    {
      "title": "A New Day in the Old Town [Excerpt]",
      "project": "Fringe (TV Series)",
      "url": "/music/christilton_fringe_01_a-new-day-in-the-old-town_excerpt.mp3",
      "image": "/images/cover-art/fringe-season-4.jpg", 
    },
    {
      "title": "Lion Attack",
      "url": "/music/christilton_zoo_02_lion-attack.mp3",
      "project": "Zoo (TV Series)",
      "image": "/images/cover-art/zoo.jpg", 
    },
    {
      "title": "Divide Main Theme",
      "url": "/music/christilton_divide_01_divide-main-theme.mp3",
      "project": "Divide (Video Game)",
      "image": "/images/cover-art/divide.jpg", 
    },
    {
      "title": "The Adventures of Moxie",
      "project": "Moxie (Robot Companion)",
      "url": "/music/christilton_moxie_01_the-adventures-of-moxie.mp3",
      "image": "/images/cover-art/moxie.jpg", 
    },
    {
      "title": "Funeral Pyre Straits [Excerpt]",
      "url": "/music/christilton_fringe_05_funeral-pyre-straits_excerpt.mp3",
      "project": "Fringe (TV Series)",
      "image": "/images/cover-art/fringe-season-4.jpg", 
    },
    {
      "title": "The Last Monarch [Excerpt]",
      "url": "/music/christilton_zoo_03_the-last-monarch.mp3",
      "project": "Zoo (TV Series)",
      "image": "/images/cover-art/zoo.jpg", 
    },
    {
      "title": "Ocillating Rift",
      "url": "/music/christilton_ctoriginal_02_oscillating-rift.mp3",
      "project": "Personal Project",
      "image": "/images/cover-art/tilton-i-selections.jpg", 
    },    
  ];

  return (
    <Layout>
       <ul className="list">
          {projects.map(project => (
            <li key={project._id}>{project.company}</li>
         ))}
        </ul>
      <Album mappedSongUrl={customTracks[0].url} mappedSongProject={customTracks[0].project} mappedSongImage={customTracks[0].image} mappedSongTitle={customTracks[0].title} customTracks={customTracks} />        
      <LogoCloud />
      <Gallery gallery isHomepage={true} />        
      <DarkFeature />
    </Layout>
    
  )
}

export const getStaticProps = async () => {
  const projects = await sanity.fetch(query);
  return {
    props: { projects } // will be passed to the page component as props
  };
};
