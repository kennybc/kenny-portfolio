import Fcose from "src/assets/Ing2Vec/fcose.png";
import PMI from "src/assets/Ing2Vec/pmi.svg";
import Image from "src/components/Image";
import Page from "src/components/Page";
import URL from "src/components/URL";

import "./styles.css";

export default function Ing2Vec() {
  return (
    <Page
      className="Ing2Vec"
      title="Ing2Vec"
      tags={[
        "#project",
        <span>
          #thunder <b>☷</b>
        </span>,
        "#ml",
        "#nlp",
      ]}
      yang={
        <>
          <h3 style={{ paddingTop: 0 }}>Background</h3>
          <p>
            This project is an intersection between my studies in computer
            science and my passion for cooking. I was looking for interesting
            ingredient pairings to experiment with in recipes and cocktails,
            which led to the idea of training a ML model to provide
            recommendations.
          </p>
          <p>
            This project implements the{" "}
            <URL to="https://snap.stanford.edu/node2vec/" newTab>
              node2vec
            </URL>{" "}
            algorithm, modeled after and in close proximity to the well
            established word2vec algorithm.
          </p>

          <h3>Graph Visualization</h3>
          <p></p>
          <iframe
            className="Ing2Vec__demo"
            src="https://kennybc.github.io/ing2vec/"
          ></iframe>
          <p>
            Above is a{" "}
            <URL to="https://kennybc.github.io/ing2vec/" newTab>
              live interactive visualization
            </URL>{" "}
            of the embedded ingredients. You can zoom in and pan to explore the
            plot: hover over a point to see the ingredient name.
          </p>
        </>
      }
      yin={
        <>
          <h3 style={{ paddingTop: "0" }}>Stack</h3>
          <p>
            The front-end side of this project uses React for a very simple
            interface and Cytoscape.js for visualizing the ingredient network.
          </p>
          <p>
            The back-end uses Python; FastAPI for the main server, and the
            following libraries for working with ML: NumPy, PyTorch, Huggingface
            (Transformers, Tokenizers), Scikit-Learn, NetworkX, and Gensim. Web
            crawling uses Scrapy, and data is stored in a local MongoDB server.
          </p>
          <p>
            Git is used for version control, Prettier for formatting during
            development, and Docker for containerizing/managing dependencies.
          </p>

          <h3>Ingredient Parser</h3>
          <p>
            The parser uses a pre-trained model called BERT (Bi-directional
            Encoder Representations from Transformers).
          </p>
          <p>
            The pre-trained model was then fine-tuned on a borrowed dataset from{" "}
            <URL
              to="https://www.researchgate.net/publication/340963363_A_Named_Entity_Based_Approach_to_Model_Recipes"
              newTab
            >
              this paper
            </URL>
            , with the Huggingface transformers library. The data wasn't the
            most complete and the fine-tuned model posed several issues, which
            is why I later elected to use a larger dataset.
          </p>
          <p>
            This parser can infer the correct ingredient with a measured 91%
            accuracy. Training parameters were very standard and the model was
            trained for about 16 hours.
          </p>

          <h3>Graph Constuction</h3>
          <p>
            I initially scraped recipes from{" "}
            <URL to="https://www.allrecipes.com/" newTab>
              allrecipes.com
            </URL>{" "}
            and parsed/tokenized the recipes myself for a total of 549 recipes
            and 961 unique ingredients. I later switched to{" "}
            <URL to="https://huggingface.co/datasets/mbien/recipe_nlg" newTab>
              RecipeNLG
            </URL>
            , a massive dataset with over 2 million recipes, of which I utilized
            27k. I constructed a graph using NetworkX containg 7.5k nodes
            (ingredients) and 137k edges (co-occurences between ingredients in a
            recipe).
          </p>
          <Image className="PMI" src={PMI} />
          <p>
            The weight of each edge is represented by PMI (pointwise mutual
            information: formula above) of the two ingredients in order to
            normalize weights and reduce emphasis on saturated parings; a high
            number of co-occurances may not always be the best identifier of a
            close relationship.
          </p>

          <h3>Node2Vec</h3>
          <p>
            This project uses node2vec to embed the nodes from the graph into a
            vector space. Node2vec works by generating "random walks" from nodes
            in order to simulate sentences; these sentences are just random
            sequences of adjacent ingredients. The purpose is to mimic the
            process in which words in a sentence can be analyzed with respect to
            adjacent words and eventually embedded in a vector.
          </p>
          <p>
            Once the walks were generated and the CBOW (the adjacent word NLP
            algorithm) model trained on the walks, I reduced the vector
            dimensions to 2D in order for the best visual experience.
          </p>

          <h3>Usage</h3>
          <p>
            Functionally, a high dimension vector is the most useful, but
            impossible to visualize. The biggest fault of this project is the
            quality of the data; I had originally done a lot of data cleanup by
            hand on my own scraped dataset, but it became an impossible task
            once I switched to RecipeNLG. In an effort to combat this, I
            filtered out any ingredient that isn't used in at least 10 recipes,
            but there are still duplicates and other problematic data points.
          </p>
          <p>
            Regardless, even the 2D representation is very interesting to
            explore, and highlights similarities in ingredients in a statistical
            way.
          </p>
        </>
      }
    />
  );
}
