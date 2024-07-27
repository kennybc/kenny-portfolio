import Page from "src/components/Page";
import URL from "src/components/URL";

export default function RedditNuker() {
  return (
    <Page
      className="RedditNuker"
      title="Reddit Nuker"
      tags={[
        <span>
          #earth <b>☷</b>
        </span>,
        "#chrome",
      ]}
      yang={
        <>
          <h3 style={{ paddingTop: 0 }}>Problem and Solution</h3>
          <p>
            Reddit doesn't allow bulk actions for posts/comments. People want to
            wipe their account and have to delete one by one, manually, or pay
            for a service to do it automatically.
          </p>
          <p>
            Reddit has a free API with functionality including artifact
            retrieval and deletion, which allows for a pretty simple solution.
          </p>
          <p>
            I've provided a free{" "}
            <URL
              to="https://chromewebstore.google.com/detail/reddit-nuker-clean-out-yo/efnhgmeeeojdmpbigdbdpjfjfanhipio"
              newTab
            >
              chrome extension
            </URL>{" "}
            to "nuke" post or comment history, available on Google's Chrome Web
            Store. The extension has over 1,000 users and is rated quite highly.
          </p>
        </>
      }
      yin={
        <>
          <h3 style={{ paddingTop: "0" }}>Authentication</h3>
          <p>
            Reddit Nuker uses OAuth2 to authenticate users. Permission is needed
            from the user to make calls to the Reddit API on their behalf.
          </p>
          <p>
            Reddit Nuker only requests the minimum permission levels necessary
            to maintain functionality. Authenticated sessions are temporary and
            expire after 1 hour.
          </p>
          <h3>Control Flow</h3>
          <ol>
            <li>User opens Reddit Nuker and makes an action request</li>
            <li>Nuker prompts user authentication through Reddit</li>
            <li>
              Nuker fetches list of 50 most recent posts/comments from username
            </li>
            <li>
              Nuker loops through list and makes requests to Reddit API to
              delete each
            </li>
          </ol>
        </>
      }
    />
  );
}
