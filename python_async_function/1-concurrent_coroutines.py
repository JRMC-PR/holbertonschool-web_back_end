#!/usr/bin/env python3
"""Let's execute multiple coroutines at the same time with async"""
import asyncio


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(maxdelay: int, n: int) -> list:
    """ return the list of all the delays (float values)."""
    delay_list = []
    for i in range(n):
        delay_list.append(await wait_random(maxdelay))
        #sort the list using boubble sort algorithm
    for item in range(len(delay_list)):
        for item2 in range(len(delay_list)):
            if delay_list[item] < delay_list[item2]:
                delay_list[item], delay_list[item2] = delay_list[item2], delay_list[item]
    return delay_list
