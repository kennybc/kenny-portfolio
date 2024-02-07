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
          <Image className="Fcose" src={Fcose} alt="Cytoscape fCoSE Layout" />
          <p>
            Within Cytoscape's visualization of the graph, ingredients of
            similar nature that co-occured (intuitively) grouped together. This
            was achieved using a force-directed layout (uniform length edges,
            minimal crossing edges) algorithm.
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
            most complete and the fine-tuned model posed several issues.
          </p>
          <p>
            The labeled data contained mostly western ingredients and was not
            labeled consistently, so I had to manually correct a number of
            labels and insert my own examples.
          </p>
          <p>
            The parser can infer the correct ingredient with a measured 91%
            accuracy. Training parameters were very standard and the model was
            trained for about 16 hours.
          </p>

          <h3>Graph Constuction</h3>
          <p>
            The web crawler was paused after scraping 549 recipes, for a total
            of 961 unique ingredients. The graph was constructed using NetworkX
            and contained 961 nodes (ingredients) and 16,620 edges
            (co-occurences between ingredients in a recipe).
          </p>
          <p>
            The weight of each edge was represented by the number of times the
            connected ingredients co-occured, and was later changed to the PMI
            (pointwise mutual information).
          </p>
          <Image className="PMI" src={PMI} />
          <p>
            Above is the formula used to calculate PMI between ingredients{" "}
            <i>x, y</i>, where <i>p(x)</i> is defined as the number of recipes
            containing ingredient <i>x</i> divided by the total number of
            recipes (and the same for ingredient <i>y</i>).
          </p>
          <p>
            PMI allows normalization of weights and reduces emphasis on
            saturated pairings; a high number of co-occurances may not always be
            the best identifier of a close relationship.
          </p>

          <h3>Node2Vec</h3>
        </>
      }
    />
  );
}
