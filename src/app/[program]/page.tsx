"use client"

export async function generateStaticParams() {
  const ids = ['117510'];
  const paths = ids.map(id => ({ params: { id } }));

  return [{
    program: "117510",
  }];
}

export default function Test({ params }: any) {
    const { program } = params;

    return (
        <div>{program}</div>
    )
}
