export function SchemaScripts({ schemas }: { schemas: Array<Record<string, unknown> | null> }) {
  return <>{schemas.filter(Boolean).map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />)}</>;
}
