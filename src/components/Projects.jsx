import ImageSlider from '@/components/Slider'
import MabaRes from '@/assets/Images/projects/mabaResponsive.webp'
import MabaResThumb from '@/assets/Images/projects/mabaResThumbnail.png'
import BalanceAndroid from '@/assets/Images/projects/BalanceAndroid.webp'
import BalanceAndroidThumb from '@/assets/Images/projects/BalanceAndroidThumbnail.png'


export const projectList = [{title: 'Maba Agroexport', description: 'An informative front-end application, covering the export of agricultural products developed in Vite (React)', frameworks: ['Vite','React'], languages: ['JavaScript','Sass','CSS','HTML'], image: MabaRes, thumbnail: MabaResThumb},
{title: 'Balance financiero', description: 'Android application intended for the control of personal monetary accounts', frameworks: ['Android Studio','Google Firebase', ], languages: ['Java'], image: BalanceAndroid, thumbnail: BalanceAndroidThumb},]

export default function Projects(){
    return <div>
   <ImageSlider projects={projectList}/> 
</div>
}

