#!/usr/bin/env python3
"""suma mixed list and returns a float annotation"""
from typing import List


def sum_mixed_list(mxd_lst: List[float | int]) -> float:
    """returns a float"""
    return sum(mxd_lst)
