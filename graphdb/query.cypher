// Disregard relationship direction to get all nodes (including the bidirectional ones)
MATCH (s)-[r]-(t)
RETURN labels(s)[0] AS source_label, properties(s) AS source, type(r) AS relationship_type, labels(t)[0] AS target_label, properties(t) AS target
