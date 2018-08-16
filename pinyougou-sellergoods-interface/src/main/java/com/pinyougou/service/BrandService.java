package com.pinyougou.service;

import com.pinyougou.pojo.TbBrand;
import entity.PageResult;

import java.util.List;
import java.util.Map;

public interface BrandService {
    public List<TbBrand> findAll();
    /**
     * 返回分页列表
     * @return
     */
    public PageResult findPage(int pageNum, int pageSize);
    /**
     * 增加
     */
    public void add(TbBrand brand);
    /**
     * 删除
     * */
    public void delete(Long [] ids);

    /**
     * 修改
     * */
    public TbBrand findOne(Long id);
    public void update(TbBrand brand);

    /**
     * 分页
     * @param pageNum 当前页 码
     * @param pageSize 每页记录数
     * @return
     */
    public PageResult findPage(TbBrand brand, int pageNum,int pageSize);


    /**
     * 品牌下拉框数据
     */
    List<Map>selectOptionList();
}
