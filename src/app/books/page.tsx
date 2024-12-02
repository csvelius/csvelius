"use client";

import { useState } from "react";

interface Book {
  title: string;
  author: string;
  year: number;
  genre: string;
  isRead: boolean;
  started?: boolean;
  url?: string;
}

export default function BookList() {
  const [books] = useState<Book[]>([
    // computer science
    {
      title: "the pragmatic programmer",
      author: "david thomas, andrew hunt",
      year: 1999,
      genre: "computer science",
      isRead: true,
      started: false,
      url: "https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052/ref=sr_1_1?crid=1RMRYZVIZJNBJ&dib=eyJ2IjoiMSJ9.84Xun4zePRzxcYJXHbNXB-IXlwuiMrWDL0q4EXkASf1OCI-sVUH_evNJxbr4ttHlR3904boCHRn5MLyxwCW8Hi_ugt4LDu9COqBIiXsBjTzqDVAkM3MHod1rGFbiBxFmDkS9xLO5ZCJ6QbRbr4JVCPQbYPPPqjeCnL2iscS1hPDP0e09SZNPAYBSS2S55rszFVzQ788YDePApX3AhI_SwO5Cpoz01zo0bHxlIvsRESA.vDY4ZNhbHuA6JOOd3AZe4gCk52axp4sfJD3-mqOt_Iw&dib_tag=se&keywords=the+pragmatic+programmer&qid=1733115115&sprefix=the+pr%2Caps%2C164&sr=8-1",  
    },
    {
      title: "clean code",
      author: "robert c. martin",
      year: 2008,
      genre: "computer science",
      isRead: false,
      started: true,
      url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=sr_1_1?crid=QMEDHCSQ7FFY&dib=eyJ2IjoiMSJ9.eUeDq4BPqNYI52SOU-OcJ3C2KDn8vVIU9hv6jH6zzhthOQrpKVIgqTgJOPARkDyZG4_ah8pVjLIAir2iQkQYXLurkhfrruPI2cZkF19ZT9NXc5XPLsSD647uVWe5a9TGH6xgo3tbdhlyjGYX-ZWpZQHC3wrkIjDbp4WvJpeSST7zeLr7bzUEKhpfdLe0kh5QRyH_uRJo8EIJBJIozhgYsGSFObAibC7_qNA8ONdQeB8.Hx46mMxX_Zr2KTJUwNEwF0eNOUyPtbQtbEBZXYoTZ9o&dib_tag=se&keywords=clean+code+by+robert+c.+martin&qid=1733115097&sprefix=clean+code%2Caps%2C158&sr=8-1",
    },
    {
      title: "design patterns",
      author: "erich gamma, richard helm, ralph johnson, john vliissides",
      year: 1994,
      genre: "computer science",
      isRead: false,
      url: "https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/ref=sr_1_1?crid=6JG5LEWMZDP2&dib=eyJ2IjoiMSJ9.mTRaTOPYqsPcUsGD8azntdJHUWKgfhdBfCZgxW2hGW98XzeEaqxORCZnT2N1Ea696QN9oCH5m71JmxqcXuBcoo53XIppRRT3sNCuy6d2dBJBCn8Vn-A--C5aVvaJyMbuczKb-3nH6yn0ZnYug9xsmLv3KVL51UyySz--GxABFRf4MU4-MWOw0A8wLhb2xzBpl-4Hx66CZR5uZBPpxoan3usa4Dowd25cX1zoceUWDiE._SGeY1XfLaPo66nuiD2ZB_SpWtAfyB922tVtTHanOXw&dib_tag=se&keywords=design+patterns&qid=1733115073&sprefix=design+pa%2Caps%2C173&sr=8-1",
    },
    {
      title: "refactoring",
      author: "martin fowler",
      year: 1999,
      genre: "computer science",
      isRead: false,
      url: "https://www.amazon.com/Refactoring-Improving-Existing-Addison-Wesley-Signature/dp/0134757599/ref=sr_1_1?crid=FMKRZHVZU17W&dib=eyJ2IjoiMSJ9.d5ydIv1vhzDGghLAj8wLklauloCsgGaxjFHKz7lSKIYxwJlfMPneuh-S831PSnuLZb7jXHxtei8RXNsD0uY1KA7Ek4_2s29DLNkQmlAMBlPiP3MY47GsPPFP6KgMzbOBrnWoGCQh-hVDwhINMXdylD9j41DqwHDq5NlPXRYluZ5U3Y131C65QsG63Xn_lN1Iy2KlDRoP9xSv8Y5vuUd9-Whw__kjVPdc4-snYsmTz1c.lvL3Q_M4kD3DP251YluvJnABH3Q5SIoRFiq--xN2KVE&dib_tag=se&keywords=refactoring+martin+fowler&qid=1733115020&sprefix=refactoring+ma%2Caps%2C157&sr=8-1",
    },
    {
      title: "code complete",
      author: "steve mcconnell",
      year: 2004,
      genre: "computer science",
      isRead: false,
      url: "https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670/ref=sr_1_1?crid=MW419ADCRPM7&dib=eyJ2IjoiMSJ9.uKnS_KWeq01ns81nQdT5TCE9dPd5u--R7H_vdxx5e3B-WR7xjUcb367PcHspffx0KeQd7IwW7VVQNsbkqXITHnyf4sPjF3zc_pP9sd-tleaiE7FnmOwimmdefuc5jBHt9FjyzKYutY96YmCv1LTfGA.kfZ0wREW3Q3bxfWBH0n9VNVPRhGQddR3Bh5AO2Unw9c&dib_tag=se&keywords=code+complete+by+steve+mcconnell&qid=1733115044&sprefix=code+com%2Caps%2C163&sr=8-1",
    },
    {
      title: "introduction to algorithms",
      author: "thomas h. cormen, charles e. leiserson",
      year: 1990,
      genre: "computer science",
      isRead: true,
      url: "https://www.amazon.com/Introduction-Algorithms-fourth-Thomas-Cormen/dp/026204630X/ref=sr_1_1?crid=1GUE06RBM4491&dib=eyJ2IjoiMSJ9.dDPqDZSqkDgdnEPWAEei-MeQSxB6cv4wGQEoGtimEDWuKr9T9wRD9KN5dF0CI1A1PCkJndxsqYhQ-PMjN7n07rQ_PI_cGs06K-W7T3DxygHo1rHyfxI2_dpijDRhzZkAz38ETASRFEMqYjdOhGNo6DYkBvkDkLGDZ8ctG9AGxDTKeK2TU0MKVMgYEXSBzRIkNRS63_5CDf19kgAH92ImKKpQS6IcPV4-N2fMvXoN050._oh4jwiWj_oAqytdL3_ohQAlyW0QGIw92iCWroYQQi4&dib_tag=se&keywords=introduction+to+algorithms&qid=1733114997&sprefix=introoduction%2Caps%2C158&sr=8-1",
    },
    {
      title: "structure and interpretation of computer programs",
      author: "harold abelson, gerald jay sussman",
      year: 1985,
      genre: "computer science",
      isRead: true,
      url: "https://www.amazon.com/Structure-Interpretation-Computer-Programs-Engineering/dp/0262510871/ref=sr_1_1?crid=1J0Z5CZNS8W6I&dib=eyJ2IjoiMSJ9.yvDe9vTEM9IbNsPJnH-SMQRsOaw-1QQ6wrB__8naI72GzrZSWmmT8qBAcYI3JY4rlM5dVOHYoqcyTDu8abDb7Ngs4S2xXem52d4DNUcgPMPjzPHNGGtRN-_BXbihiujw9kX2c1Qy8zTetS7bzoeyokvxmTMTwTmNBP48UpTByJmRf977DJyvhqUupY79-R_5h8koM6Xi0Ip9NIXs9uTVk3eGaZJXI6rnpgSvh9vfRzU.9llAYjR_B0reZZx6EfoJJGZX8m7u6iT68Kg4xiwaoOo&dib_tag=se&keywords=structure+and+interpretation+of+computer+programs&qid=1733114966&sprefix=tructure+and+interpretation+of+computer+programs%2Caps%2C132&sr=8-1",
    },
    {
      title: "computer networks",
      author: "andrew s. tanenbaum",
      year: 2002,
      genre: "computer science",
      isRead: false,
      url: "https://www.amazon.com/Computer-Networks-Global-Andrew-Tanenbaum/dp/1292374063/ref=sr_1_4?crid=2FPVJDBN83ZS4&dib=eyJ2IjoiMSJ9.l8NcOVwYQjx-MVDYfOqB7zaXx_hWCCoOtCfrm0vj6dzE4rLUEMUx52CmhgnRJ_t5_q3qhIrqHkuJ2qvTcC50L1rWBsb_mIGwtiXEHWGTuaf1i4KVOXsrrVROUcNdb2iZts7DH1AsZ3rtMYyBQAGAfIot6qS9NBAr8epBt_u7bLg6WMrevrTu1JTQSC-HuKrR82N5Bp3MxgX9RdgNz0mgEO8HKk8NUo3uMi9Cz1HT8b4.MmkD-PIphuVhvQicIk_F4DJuGm6abU7zod5d8SmQd2c&dib_tag=se&keywords=computer+networks+andrew+tanenbaum&qid=1733114749&sprefix=computer+networks+and%2Caps%2C105&sr=8-4",
    },
    {
      title: "operating system concepts",
      author: "abraham silberschatz",
      year: 2012,
      genre: "computer science",
      isRead: false,
      started: true,
      url: "https://www.amazon.com/Operating-System-Concepts-Abraham-Silberschatz-ebook/dp/B07CVKH7BD/ref=sr_1_1?crid=22C1DT4X49SDO&dib=eyJ2IjoiMSJ9.tG00FG5QZf2SXvbCuvl7UKUeBZoanq_2xzoEVUvUsuEJfax_Z6q-WmFP3rPmD9s8mHPl176IfDLFOpUc9j5ndjBMScp0NxTZAzrJZeKFHJf9u9kxgPjqtFNVut4rjSfQ-w62BJj16KSiM3v4ViIvIL1UMTtM6xqJIX8pVQQIolC9ej1F-EOvx1sv7dnJ5dKWt9fw5qcID7_9ij9pWojIHSk-HEbtFDbjjwmM-y7ZwQ4.rgPsyIaLJuzjOK_VxCJ3g3E8WKJ0amc6v1S-wCYzFGk&dib_tag=se&keywords=operating+systems+concepts&qid=1733114679&s=digital-text&sprefix=opertaing+systems+con%2Cdigital-text%2C106&sr=1-1",
    },
    // Philosophy Section
    {
      title: "meditations",
      author: "marcus aurelius",
      year: 180,
      genre: "philosophy",
      isRead: true,
      url: "https://www.amazon.com/Meditations-New-Translation-Modern-Library-ebook/dp/B000FC1JAI?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.y3qtmJRUaX10vbQdAMIaICZ19xtDJLchEXswY9MdUANVFMIfzafUiBrxzzA1UvkzSw7Fuwq4e_OD4tyawuv0DmfyGvOu_iy_evPsfQoDZZiH676YFv3n0SCysDIbgQDNHjLtRqKkS5RPKpt9IuhOxyIctCs4fZGCoYx1SaYOhDaUBdIo-9NqC5kM_I6x0F1K6oUq7oyQM0ekHJ61pJJKazIotSpXxEbX43bxVO2ekoM.KypSH-Da_cdgZgl_bEZNQWaYBN3adjv90Ik5g_m_lpI&dib_tag=AUTHOR",
    },
    {
      title: "beyond good and evil",
      author: "friedrich nietzsche",
      year: 1886,
      genre: "philosophy",
      isRead: false,
      url: "https://www.amazon.com/Beyond-Good-Evil-Penguin-Classics/dp/014044923X/ref=sr_1_1?crid=3E9WOC5FTGPKU&dib=eyJ2IjoiMSJ9.8HjpsYhYhv8o_1vGE6m8kdOa2VVFFCZH5AhTI8mPNkC6wAVw-zoqsnfgmyFCko2pFjh9TdGfwl6_omMZU32jlUMikkkfwdEoqqkMOkK2pkiQ-i60kHfV_Uu3TifmnAmGE_TK7m6wSTe04Fa9oDRi8MiiNGqRNKFbgAq67LQJZgyCMm3SGcZdPVTwBt6jAO_n84dxSFM2oWKLjk2ipzOO0_Sb3xjOXnYE93T8vvEu90A.NIMpp7Xt5DdcPyzCIKNrLR0kKuPW53oy4ZF8X19TxTA&dib_tag=se&keywords=beyond+good+and+evil+friedrich+nietzsche&qid=1733114942&sprefix=beyond+%2Caps%2C167&sr=8-1",
    },
    {
      title: "the republic",
      author: "plato",
      year: -380,
      genre: "philosophy",
      isRead: true,
      url: "https://www.amazon.com/Republic-Penguin-Classics-Plato/dp/0140455116/ref=sr_1_1?crid=2JC2YB92AVRUN&dib=eyJ2IjoiMSJ9.4a5cascBpkMIdBFI2i8dTiEbzNZc4dQr_vv2RXPW8cGU3VJ3aCMoURJ4nYMa8PCqr2UYLz1N-Rh5QeMV2pokj8ISywCxqKlLZCqo8YEstA4rODMSVIMRHtZ2cF7gcUtppWmT7-2kvKVsxl2c7Yaq6cZnitAP1Y86viwUyFdd2V63cAZ9Lac05gxnT0eqNID8fEhenNLCN2W8Wdmwo_XX3zzQgHGrAAFXXfSiYaCJCi8.wZPjfEEGUt06CQB8UwA_gitKCBi3G9BLQkddFTaq8Tw&dib_tag=se&keywords=the+republic&qid=1733114920&sprefix=the+republi%2Caps%2C177&sr=8-1",
    },
    {
      title: "critique of pure reason",
      author: "immanuel kant",
      year: 1781,
      genre: "philosophy",
      isRead: false,
      url: "https://www.amazon.com/Critique-Reason-Cambridge-Works-Immanuel/dp/0521657296/ref=sr_1_1?crid=31495THSP6HPG&dib=eyJ2IjoiMSJ9.bwd7L4FtA_CU-tUuwNKWkSFkAYCC-O13-M4KpwIgksa07wE7_bo1K5kUBdI0qSEsaDWKItmqUz6H6x8zl1Q8UnKKWU3OgODzpeuO3eSVgKT4LZIw8inUbYjp_gaLZMdAUCHrIQSxEtJgiv_jXlBc5hW8QkiEhZHhfPUF1sF-cNpW5hXwb3D-eQXcuXKZYefQ_kvSM2uBSkP8_PnXRet-pTDuWGGAhbzd0xiJBGT1OY8.p4q_g23Z69gpcPe6se4_bG-kW67iRTeNFO1ZbGZTQuk&dib_tag=se&keywords=critique+of+pure+reason+kant&qid=1733114901&sprefix=critque+of+p%2Caps%2C158&sr=8-1",
    },
    // History Section
    {
      title: "guns, germs, and steel",
      author: "jared diamond",
      year: 1997,
      genre: "history",
      isRead: true,
      url: "https://www.amazon.com/Guns-Germs-Steel-Fates-Societies/dp/0393354326/ref=sr_1_1?crid=RHKADX1FEY81&dib=eyJ2IjoiMSJ9.t9Xw-kOYz70ldoA4Fd3W0CPoiOuctwTgeF5x1BmAO7MCBK5Z8y5GD-XpsDHcKbQjp15xC6EwYwhyjzOo8V_YCsP86pOVSRYPbtUo5D09KvRIf_0kpsupd78uTz4x4mW4amnZzH8ylpTJYUzRX7xP8OcpiyQZAjxFhiQP2AqNbQ_xnvF_FGXbBGLVwSvNJH2wK6PYrNxDDgeuXV6yrz7KcIADu_7IIRIWzCrYmzlQPuw.OeNX9zc1sDn8PCqi3yl2cyj9Wfa9Jgyg7muZTEf5i7U&dib_tag=se&keywords=gun+germs+and+steel&qid=1733114881&sprefix=gun+ger%2Caps%2C161&sr=8-1",
    },
    {
      title: "sapiens: a brief history of humankind",
      author: "yuval noah harari",
      year: 2011,
      genre: "history",
      isRead: true,
      url: "https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316117/ref=sr_1_1?crid=1DNIKSJTIIF4N&dib=eyJ2IjoiMSJ9.wzuEmdhJ3aXRjr1X92lLumVWo8njsIxnEkMnHsjrCubG1GhTJ82qVaM0mRBqfImLLMmLKBRXN2Db04dkX0kXSvceLcANeCiCnjLuZXvtho8JSRcehoDURjwk4Qp1tVjFDz09T6rIP270WZULDXMj5b_31DZbMjkRYP2E4_TLShDGL-atbYyYcAoEXfOi9Pd3V-TbR-z-VovXcTVcvmAgUJln_xvjJ3ZrT5ZUJ82R1nk.nrtdls4t6T-i0fFLhtVGnMsdNra5gBgB0jUDPCkdnqg&dib_tag=se&keywords=sapiens+a+brief+history+of+humankind&qid=1733114864&sprefix=sapiens+a+%2Caps%2C176&sr=8-1",
    },
    {
      title: "the rise and fall of the third reich",
      author: "william l. shirer",
      year: 1960,
      genre: "history",
      isRead: false,
      url: "https://www.amazon.com/Rise-Fall-Third-Reich-ebook/dp/B07XD76H41/ref=sr_1_1?crid=2VWGZZ6RQADSL&dib=eyJ2IjoiMSJ9.AoAD-_adPmPA3OTzuDquj0fNR74EMAFhGZziIhM2QZQ9q8r7Xk53LWRPOXZEh21PfTuFSAzHiTv8lKHn7YIZr9Cj4QGtAmbR1a9QRbYCt2EH8x4KCNW82cw7ZvAV-kALPxA4il-rmtAOypFPI5-pjgMSahOxIu3QEy7PB4mubS6cGxmmjlPc3rnh3GPbAYb6-PsLTppp3XcdOzOBB4ba9Qf3DraFBFy6EO-F1AGtidg.0TYNhCcmTCPCkO6As6wyafZpisEy5Qcds1mFQMMuBLU&dib_tag=se&keywords=the+rise+and+fall+of+the+third+reich+1960&qid=1733114843&sprefix=the+rise%2Caps%2C167&sr=8-1",
    },
    {
      title: "a people's history of the united states",
      author: "howard zinn",
      year: 1980,
      genre: "history",
      isRead: false,
      url: "https://www.amazon.com/Peoples-History-United-States/dp/0062397346/ref=sr_1_1?dib=eyJ2IjoiMSJ9.9Uwwe0HbYEhoEth2QICw2unORFHmqYaIjJeEunmsHhpZRq-fX6t9AbXxR6U5BorU5rRaOHwPbiXESoV_q6fOUc_mgNTHVnduV3V0kmvdMigJ9CRYZmGThuu3N6J3mXUblBBbs50z9o3qxSGg86i8L2HoCiwx-ESe13cEA0D8LwBautRi3uSYEo0NaPdvbbw2n9dLEZYkuhGt1utXdLS20zQxES7sSYSGFp2eAERozcg.gJUvvQjpL4jAmb_18O-vurOCFGTcuybejKvQkBYAH2s&dib_tag=se&keywords=a+people%27s+history+of+the+united+states&qid=1733114820&sr=8-1",
    },
  ]);

  // Group books by genre
  const booksByGenre = books.reduce((acc, book) => {
    const genre = book.genre;
    if (!acc[genre]) {
      acc[genre] = [];
    }
    acc[genre].push(book);
    return acc;
  }, {} as Record<string, Book[]>);

  return (
    <div className="min-h-screen p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">reading list</h1>
      {Object.entries(booksByGenre).map(([genre, genreBooks]) => (
        <div key={genre} className="mb-12">
          <h2 className="text-xl italic mb-6">{genre}:</h2>
          <div className="space-y-6">
            {genreBooks.map((book, index) => (
              <div
                key={index}
                className="border-b border-gray-200 dark:border-gray-700 pb-6"
              >
                <h2>
                  <a href={book.url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-400">
                    {book.title}
                  </a>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  by {book.author}
                </p>
                <div className="flex gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                  <p>year: {book.year}</p>
                  <span
                    className={`${
                      book.isRead
                        ? "text-green-600 dark:text-green-400"
                        : book.started
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-yellow-600 dark:text-yellow-400"
                    }`}
                  >
                    {book.isRead ? "read" : book.started ? "started" : "to read"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
