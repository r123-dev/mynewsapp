import React, {useEffect, useState} from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles([{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"After Ayodhya Ram Temple Consecration, Grand Plan For 13 More Temples - NDTV","description":"Elaborate plans are in place to make Ayodhya a global spiritual tourist hub. This involves building of at least 13 new temples, six of which will be inside and seven outside the massive temple complex.","url":"https://www.ndtv.com/india-news/after-ayodhya-ram-temple-consecration-grand-plan-for-13-more-temples-4919446","urlToImage":"https://c.ndtvimg.com/2024-01/sh83g1a_ayodhya-ram-temple-day-1-ani_625x300_23_January_24.jpeg","publishedAt":"2024-01-23T18:09:05Z","content":"Elaborate plans are in place to make Ayodhya a global spiritual tourist hub. This involves building of at least 13 new temples, six of which will be inside and seven outside the massive temple comple… [+1862 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"Lingamgunta Nirmitha Rao","title":"Winter chills continue in north India; 150 flights, 28 trains delayed in Delhi - Hindustan Times","description":"On Tuesday, Delhi recorded a minimum temperature of 6.9 degrees Celsius, slightly below the seasonal average, according to IMD data. | Latest News India","url":"https://www.hindustantimes.com/india-news/winter-chills-continue-in-north-india-150-flights-28-trains-delayed-in-delhi-101706011559470.html","urlToImage":"https://www.hindustantimes.com/ht-img/img/2024/01/23/1600x900/Gurdaspur-was-the-warmest-in-the-state-with-a-high_1705856887395_1706015429297.jpeg","publishedAt":"2024-01-23T17:28:41Z","content":"Cold wave conditions, along with dense fog, continued to grip the north Indian states on Tuesday, with the India Meteorological Department (IMD) predicting similar conditions over the region until Ja… [+3263 chars]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"Scientists sound alarm for potential outbreak of Zombie Virus | WION Fineprint - WION","description":"What would happen if the world faces an even deadlier strain of unknown virus? Or worse many more such viruses that lie hidden deep within the permafrost. Pe...","url":"https://www.youtube.com/watch?v=ej3HquQOUzY","urlToImage":"https://i.ytimg.com/vi/ej3HquQOUzY/maxresdefault.jpg","publishedAt":"2024-01-23T17:14:52Z","content":null},{"source":{"id":null,"name":"Hindustan Times"},"author":"HT News Desk","title":"Rahul Gandhi, KC Venugopal & Kanhaiya Kumar booked by Assam Police - Hindustan Times","description":"Congress leaders Rahul Gandhi, KC Venugopal and Kanhaiya Kumar were booked on Tuesday | Latest News India","url":"https://www.hindustantimes.com/india-news/rahul-gandhi-kc-venugopal-kanhaiya-kumar-booked-by-assam-police-says-assam-cm-himanta-biswa-sarma-101706029233454.html","urlToImage":"https://www.hindustantimes.com/ht-img/img/2024/01/23/1600x900/Congress_leader_Rahul_Gandhi_1706029473597_1706029473756.jpg","publishedAt":"2024-01-23T17:03:26Z","content":"Congress leaders Rahul Gandhi, KC Venugopal and Kanhaiya Kumar were booked on Tuesday by the Assam Police over charges of violence, provocation , damage to public property and assault on police perso… [+1680 chars]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"Apple releases new iPhone security update for stolen device protection - Eyewitness News ABC7NY","description":"The Mornings @ 10 team discusses the new update.https://abc7ny.com/apple-update-ios-iphone-security-stolen-device-protection/14351507/Check out more Eyewitne...","url":"https://www.youtube.com/watch?v=V3gvso4q_Pw","urlToImage":"https://i.ytimg.com/vi/V3gvso4q_Pw/maxresdefault.jpg","publishedAt":"2024-01-23T16:54:21Z","content":null}])//parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - Mynews`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat([{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"After Ayodhya Ram Temple Consecration, Grand Plan For 13 More Temples - NDTV","description":"Elaborate plans are in place to make Ayodhya a global spiritual tourist hub. This involves building of at least 13 new temples, six of which will be inside and seven outside the massive temple complex.","url":"https://www.ndtv.com/india-news/after-ayodhya-ram-temple-consecration-grand-plan-for-13-more-temples-4919446","urlToImage":"https://c.ndtvimg.com/2024-01/sh83g1a_ayodhya-ram-temple-day-1-ani_625x300_23_January_24.jpeg","publishedAt":"2024-01-23T18:09:05Z","content":"Elaborate plans are in place to make Ayodhya a global spiritual tourist hub. This involves building of at least 13 new temples, six of which will be inside and seven outside the massive temple comple… [+1862 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"Lingamgunta Nirmitha Rao","title":"Winter chills continue in north India; 150 flights, 28 trains delayed in Delhi - Hindustan Times","description":"On Tuesday, Delhi recorded a minimum temperature of 6.9 degrees Celsius, slightly below the seasonal average, according to IMD data. | Latest News India","url":"https://www.hindustantimes.com/india-news/winter-chills-continue-in-north-india-150-flights-28-trains-delayed-in-delhi-101706011559470.html","urlToImage":"https://www.hindustantimes.com/ht-img/img/2024/01/23/1600x900/Gurdaspur-was-the-warmest-in-the-state-with-a-high_1705856887395_1706015429297.jpeg","publishedAt":"2024-01-23T17:28:41Z","content":"Cold wave conditions, along with dense fog, continued to grip the north Indian states on Tuesday, with the India Meteorological Department (IMD) predicting similar conditions over the region until Ja… [+3263 chars]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"Scientists sound alarm for potential outbreak of Zombie Virus | WION Fineprint - WION","description":"What would happen if the world faces an even deadlier strain of unknown virus? Or worse many more such viruses that lie hidden deep within the permafrost. Pe...","url":"https://www.youtube.com/watch?v=ej3HquQOUzY","urlToImage":"https://i.ytimg.com/vi/ej3HquQOUzY/maxresdefault.jpg","publishedAt":"2024-01-23T17:14:52Z","content":null},{"source":{"id":null,"name":"Hindustan Times"},"author":"HT News Desk","title":"Rahul Gandhi, KC Venugopal & Kanhaiya Kumar booked by Assam Police - Hindustan Times","description":"Congress leaders Rahul Gandhi, KC Venugopal and Kanhaiya Kumar were booked on Tuesday | Latest News India","url":"https://www.hindustantimes.com/india-news/rahul-gandhi-kc-venugopal-kanhaiya-kumar-booked-by-assam-police-says-assam-cm-himanta-biswa-sarma-101706029233454.html","urlToImage":"https://www.hindustantimes.com/ht-img/img/2024/01/23/1600x900/Congress_leader_Rahul_Gandhi_1706029473597_1706029473756.jpg","publishedAt":"2024-01-23T17:03:26Z","content":"Congress leaders Rahul Gandhi, KC Venugopal and Kanhaiya Kumar were booked on Tuesday by the Assam Police over charges of violence, provocation , damage to public property and assault on police perso… [+1680 chars]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"Apple releases new iPhone security update for stolen device protection - Eyewitness News ABC7NY","description":"The Mornings @ 10 team discusses the new update.https://abc7ny.com/apple-update-ios-iphone-security-stolen-device-protection/14351507/Check out more Eyewitne...","url":"https://www.youtube.com/watch?v=V3gvso4q_Pw","urlToImage":"https://i.ytimg.com/vi/V3gvso4q_Pw/maxresdefault.jpg","publishedAt":"2024-01-23T16:54:21Z","content":null}])//arsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
                  
                         <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '50px' } } >Topnews - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                
                <InfiniteScroll
                     dataLength={articles.length}
                     next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
