import { Fragment } from 'react';
import Head from 'next/head';

// our-domain.com/new-meetup
import { useRouter } from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);

    router.replace('/');
  }

  return (
    <Fragment>
      <Head>
        <title> Add your memoriable meet ups </title>
        <meta
          name="description"
          content="in this page you may add your meetups with famous persons"
        />
      </Head>{' '}
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
