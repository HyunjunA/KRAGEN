from neo4j import GraphDatabase
import os
import pandas as pd

host = os.getenv('GRAPHDB_HOST')
driver = GraphDatabase.driver(host, auth=None)


def run_query(query, params={}):
    with driver.session() as session:
        result = session.run(query, params)
        return pd.DataFrame([r.values() for r in result],
                            columns=result.keys())


def extract_data():
    output_dir = os.getenv('EXTRACT_OUTPUT')

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    query = """
        MATCH (s)-[r]-(t)
        RETURN labels(s)[0] AS source_label, properties(s) AS source,
        type(r) AS relationship_type, labels(t)[0] AS target_label,
        properties(t) AS target
    """
    output_file=os.path.join(output_dir, os.getenv('EXTRACT_OUTPUT_FILE'))
    df=run_query(query)
    df.to_csv(output_file, index=False)
