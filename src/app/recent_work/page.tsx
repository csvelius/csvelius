export default function RecentWork() {
  return  (
  <section>
  <h2 className="text-xl italic mb-6">recent work:</h2>
  <div className="space-y-8">
    <article>
      <h3 className="mb-2">02-15-2024: <span className="font-medium">consensuskit</span></h3>
      <p className="text-gray-600 dark:text-gray-400">
        a modular framework implementing various consensus algorithms (raft, PBFT, tendermint) with visualization tools.
        perfect for learning distributed consensus. // <a href="#" className="underline hover:text-gray-800 dark:hover:text-gray-200">source code</a>.
      </p>
    </article>

    <article>
      <h3 className="mb-2">01-20-2024: <span className="font-medium">cryptomesh</span></h3>
      <p className="text-gray-600 dark:text-gray-400">
        a peer-to-peer network implementation with end-to-end encryption and a novel approach to distributed key management. // 
        <a href="#" className="underline hover:text-gray-800 dark:hover:text-gray-200"> source code</a>.
      </p>
    </article>

    <article>
      <h3 className="mb-2">12-28-2023: <span className="font-medium">byzantineDB</span></h3>
      <p className="text-gray-600 dark:text-gray-400">
        a byzantine fault-tolerant distributed database with built-in consensus and cryptographic verification. //
        <a href="#" className="underline hover:text-gray-800 dark:hover:text-gray-200"> source code</a> 
      </p>
        </article>
      </div>
    </section>
  )
}
