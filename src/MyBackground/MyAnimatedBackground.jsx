import ReactPlayer from 'react-player/lazy'

function MyAnimatedBackground ({ src }) {
    return (<ReactPlayer style={{opacity: '0.4'}} playing={true} width='100%' muted={true} url={src} />)
}

export default MyAnimatedBackground