const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/gitHub-weekly-trending-page_development",
      test: "postgres://postgres:postgres@localhost:5432/gitHub-weekly-trending-page_test",
      e2e: "postgres://postgres:postgres@localhost:5432/gitHub-weekly-trending-page_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
