import AsciiArt from "../components/acsii-art";

export default function Home() {
  return (
    <div className="space-y-12">
      <AsciiArt />
      <section>
        <h2 className="text-xl mb-4">
          swe // distributed systems, cryptography, consensus //
          rust, python, linux, nvim // accelerate
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          contact me{" "}
          <a
            href="https://twitter.com/csvelius"
            className="underline hover:text-gray-800 dark:hover:text-gray-200"
          >
            @x/twitter
          </a>
        </p>
      </section>

      <section>
        <p className="text-gray-600 dark:text-gray-400">
          autodidactic computer scientist with a deep focus on distributed
          consensus and cryptography. i enjoy tackling complex problems in
          decentralized systems and applying cryptographic theory to real-world
          problems. always curious.
        </p>
      </section>

      <section>
        <h2 className="text-xl italic mb-6">recent work:</h2>
        <div className="space-y-8">
          <article>
            <h3 className="mb-2">
              02-15-2024: <span className="font-medium">consensuskit</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              a modular framework implementing various consensus algorithms
              (raft, PBFT, tendermint) with visualization tools. perfect for
              learning distributed consensus. //{" "}
              <a
                href="#"
                className="underline hover:text-gray-800 dark:hover:text-gray-200"
              >
                source code
              </a>
              .
            </p>
          </article>

          <article>
            <h3 className="mb-2">
              01-20-2024: <span className="font-medium">cryptomesh</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              a peer-to-peer network implementation with end-to-end encryption
              and a novel approach to distributed key management. //
              <a
                href="#"
                className="underline hover:text-gray-800 dark:hover:text-gray-200"
              >
                {" "}
                source code
              </a>
              .
            </p>
          </article>

          <article>
            <h3 className="mb-2">
              12-28-2023: <span className="font-medium">byzantineDB</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              a byzantine fault-tolerant distributed database with built-in
              consensus and cryptographic verification. //
              <a
                href="#"
                className="underline hover:text-gray-800 dark:hover:text-gray-200"
              >
                {" "}
                source code
              </a>
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
