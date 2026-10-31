
import { useState } from "react";

export default function ScrapbookOpening({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;

    setIsOpening(true);

    window.setTimeout(() => {
      onOpen();
    }, 650);
  };

  return (
    <main
      className={`scrapbook-opening ${
        isOpening ? "scrapbook-is-opening" : ""
      }`}
    >
      <div className="scrapbook-background" aria-hidden="true">
        <span className="scrapbook-heart heart-one">♡</span>
        <span className="scrapbook-heart heart-two">♥</span>
        <span className="scrapbook-heart heart-three">♡</span>
        <span className="scrapbook-flower flower-one">✿</span>
        <span className="scrapbook-flower flower-two">❀</span>
        <span className="scrapbook-sparkle sparkle-one">✧</span>
        <span className="scrapbook-sparkle sparkle-two">✦</span>
        <span className="scrapbook-sparkle sparkle-three">✧</span>
      </div>

      <section className="scrapbook-content">
        <p className="scrapbook-eyebrow">
          ♡ A LITTLE BIRTHDAY SURPRISE ♡
        </p>

        <div className="scrapbook-book">
          <div className="book-spine" />

          <div className="scrapbook-cover">
            <div className="scrapbook-cover-border">
              <div className="book-decoration decoration-top">
                ✿
              </div>

              <div className="book-sticker">
                made with love
                <span>♥</span>
                <span>Kedari</span>
              </div>

              <p className="scrapbook-small-title">
                a little scrapbook
              </p>

              <h1 className="scrapbook-name">
                For
                <span>Arushi</span>
              </h1>

              <div className="scrapbook-divider">
                <span>♡</span>
              </div>

              <p className="scrapbook-cover-message">
                Little memories, sweet moments,
                <br />
                and lots of birthday magic.
              </p>

              <div className="book-decoration decoration-bottom">
                ✿
              </div>

              <span className="book-corner corner-left">❀</span>
              <span className="book-corner corner-right">❀</span>
            </div>
          </div>
        </div>

        <p className="scrapbook-prompt">
          {isOpening
            ? "Your memories are waiting..."
            : "Psst... something special is waiting for you"}
        </p>

        <button
          type="button"
          className="scrapbook-open-button"
          onClick={handleOpen}
          disabled={isOpening}
        >
          <span>
            {isOpening ? "Opening your scrapbook..." : "Open your scrapbook"}
          </span>
          <span aria-hidden="true">♡</span>
        </button>

        <p className="scrapbook-footer">
          made especially for you, with lots of friendship
        </p>
      </section>
    </main>
  );
}
