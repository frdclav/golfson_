import React, { useState } from "react"
import { Link } from "gatsby"
// import styled from "styled-components"
// import { useFlexSearch } from "react-use-flexsearch"
// import * as queryString from "query-string"

import { rhythm } from "../utils/typography"


const AllPosts = ({ posts }) => {
    return (
        <div style={{ margin: "20px 0 40px" }}>
            {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                    <div key={node.fields.slug}>
                        <h2
                            style={{
                                marginBottom: rhythm(1 / 4),
                                fontFamily: `Zen Kurenaido,sans-serif`

                            }}
                        >
                            <Link style={{ boxShadow: `none`, color: "black" }} to={`/blog${node.fields.slug}`}>
                                {title}
                            </Link>
                        </h2>
                        <small style={{
                            fontFamily: 'Zen Kurenaido',

                        }}>{node.frontmatter.date}</small>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: node.frontmatter.description || node.excerpt,
                            }}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default AllPosts