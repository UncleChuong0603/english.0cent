import NotificationFeed from '@components/notifications/notification_feed.jsx';
const page = () => {
  return (
    <section className='flex-col px-10 py-10 space-y-10 text-justify'>
      <div className='flex-end w-full space-x-10'>
        <div className='w-1/4 bg-black rounded-3xl px-3 py-3 text-white text-center'>Mark as read</div>
        <div className='w-1/4  bg-black rounded-3xl px-3 py-3 text-white text-center'>Clear the read notifications</div>
      </div>
      <NotificationFeed />
      <NotificationFeed />
      <NotificationFeed />
      <NotificationFeed />
    </section>  
    )
}

export default page