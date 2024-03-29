#!/usr/bin/env python3
"""Augment the following code with
the correct duck-typed annotations:"""
from typing import Mapping, Any, Optional, TypeVar, Union


T = TypeVar('T')


def safely_get_value(dct: Mapping, key: Any,
                     default: Optional[T] = None) -> Union[Any, T]:
    if key in dct:
        return dct[key]
    else:
        return default
