import Page from "src/components/Page";
import URL from "src/components/URL";

import "./styles.css";

export default function RedditNuker() {
  return (
    <Page
      className="RedditNuker"
      title="Reddit Nuker"
      tags={[
        "#project",
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
            for a service to do it automatically. It doesn't seem worth it to
            pay to solve this kind of problem...
          </p>
          <p>
            Reddit has a free API that allows you do delete a post/comment given
            an ID. Reddit also has an API endpoint that allows you to retrieve a
            list of post/comment IDS associated with a given user. This allows
            for a pretty simple and intuitive solution.
          </p>
          <p>
            I've provided a free{" "}
            <URL
              to="https://chromewebstore.google.com/detail/reddit-nuker-clean-out-yo/efnhgmeeeojdmpbigdbdpjfjfanhipio"
              newTab
            >
              chrome extension
            </URL>{" "}
            to "nuke" post or commend history, available on Google's Chrome Web
            Store.
          </p>
        </>
      }
      yin={
        <>
          <URL to="/"> Home </URL>
          <h3 style={{ paddingTop: "0" }}>Authentication</h3>
          <p>
            User authentication is required in order to make calls to Reddit's
            API. This was meant to be an easy project: both for me as the
            developer and for the user.
          </p>
          <p>
            The "correct" way to authenticate would be through OAuth2... but
            that required registration and extra actions on the user end to use
            the extension.
          </p>
          <p>
            The easiest way to authenticate is to have the extension user to
            login to Reddit, and then scrape Reddit to find the user's modhash.
            This requires no additional action for the user and simplifies the
            authentication process; the user is consenting to the extension
            acting on their behalf when the install it, so no need to confirm
            again through Reddit.
          </p>
          <h3>Control Flow</h3>
          <p>
            After the user logs into Reddit, opens the extension, and clicks
            delete:
            <ol>
              <li>
                Nuker opens old.reddit.com in a new tab (modhash easier to
                locate on old site architecture)
              </li>
              <li>
                Nuker scrapes old.reddit.com, saves username & modhash, closes
                tab
              </li>
              <li>
                Nuker fetches list of 100 most recent posts/comments from
                username
              </li>
              <li>
                Nuker loops through list and makes requests to Reddit API to
                delete each
              </li>
              <li>
                Once all deleted, repeat from step 3. Stop if no more remain
              </li>
            </ol>
          </p>
        </>
      }
    />
  );
}
