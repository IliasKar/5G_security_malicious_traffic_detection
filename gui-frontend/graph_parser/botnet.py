import os
import json
import re
from input import inputs


class Node(object):

    def __init__(self, id, label, x, y, size=2, color=None, count=0, type='square'):
        self.id = id
        self.label = label
        self.x = x
        self.y = y
        self.size = self.get_size(size, count)
        self.count = count
        self.color = color
        self.type = type
        self._set_color()

    def get_size(self, size, count):
        if count > 100:
            return 20
        elif count > 50:
            return 15
        elif count > 10:
            return 13
        elif count > 1:
            return 10
        return size

    def _set_color(self):
        if not self.color:
            if self.count >= 100:
                self.color = "#a80202"
            elif self.count >= 50:
                self.color = "#4f1704"
            elif self.count >= 10:
                self.color = "#9c5917"
            elif self.count > 1:
                self.color = "#026ba8"
            else:
                self.color = "#a6b6bf"

class Edge(object):

    def __init__(self, id, target, count, color="#333333", type="arrow", size=2, source="botnet"):
        self.id = id
        self.source = source
        self.target = target
        self.color = color
        self.type = type
        self.count = count
        self.size = size

def get_targets(input):
    target_groups = re.findall("->,(?P<target>\d+.\d+.\d+.\d+)", input)
    unique_targets, unique_targets_list = [], []
    for target in target_groups:
        if target not in unique_targets_list:
            unique_targets_list.append(target)
            unique_targets.append( { "target": target, "count": target_groups.count(target)} )
    return unique_targets


def get_nodes(targets, number_of_packets):
    nodes = [Node("botnet", "147.32.84.165 Botnet sent {0} messages".format(number_of_packets) , 0, 0, color="#a80202", size=12, count=number_of_packets).__dict__]
    for index, target in enumerate(targets):
        nodes.append(
            Node(
                "target-{0}".format(index),
                "IP {0} received {1} message{2}".format(target["target"], target["count"], target["count"] > 1 and "s" or ""),
                (index + 1) / 2,
                (index + 1) / 4,
                count=target["count"]
            ).__dict__
        )
    return nodes


def get_edges(targets):
    edges = []
    for index, target in enumerate(targets):
        edges.append(
            Edge(
                "botnet-target-{0}".format(index),
                "target-{0}".format(index),
                target["count"],
            ).__dict__
        )
    return edges


def get_number_of_packets(targets):
    number_of_packets = 0
    for target in targets:
        number_of_packets += target["count"]
    return number_of_packets


def process(index, input):
    subjects = [
        "pcap-0 14:24:20-14:34:20",
        "pcap-1 10:42:44-10:52:43",
        "pcap-2 15:27:11-15:36:05",
    ]
    result = {
        "nodes": [],
        "edges": [],
        "subject": None,
        "number_of_packets": 0,
    }
    targets = get_targets(input)
    result["number_of_packets"] = get_number_of_packets(targets)
    result["nodes"] = get_nodes(targets, result["number_of_packets"])
    result["edges"] = get_edges(targets)
    result["subject"] = subjects[index].format(result["number_of_packets"])
    return result


if __name__ == '__main__':
    print "Execution started"
    results = {"results": []}
    for index, input in enumerate(inputs):
        results["results"].append(process(index, input))
    f = open(os.path.join(os.path.dirname(__file__), "graph_elements.json"), "w+")
    f.write(json.dumps(results, indent=4))
    print "Execution finished"
